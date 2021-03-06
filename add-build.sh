#!/usr/bin/env bash

set -u -e -E -o pipefail

echo "Running: $0" >&2

readonly currentDir=$(cd $(dirname $0); pwd)
cd ${currentDir}

function onError {
  echo "Failed to execute: $0"
  echo ""
}

# Setup crash trap
trap 'onError' ERR


cd ../rxjs

  git fetch git@github.com:reactivex/rxjs.git --tags
  export BUILD_SCM_HASH=$(git rev-parse HEAD)

  export BUILD_SCM_VERSION_RAW=$(git describe --abbrev=7 --tags HEAD)

  # Find out if there are any uncommitted local changes
  # TODO(i): is it ok to use "--untracked-files=no" to ignore untracked files since they should not affect anything?
  if [[ $(git status --untracked-files=no --porcelain) ]]; then LOCAL_CHANGES="true"; else LOCAL_CHANGES="false"; fi
  export BUILD_SCM_LOCAL_CHANGES=${LOCAL_CHANGES}

  # Reformat `git describe` version string into a more semver-ish string
  #   From:   5.2.0-rc.0-57-g757f886
  #   To:     5.2.0-rc.0+57.sha-757f886
  #   Or:     5.2.0-rc.0+57.sha-757f886.with-local-changes
  export BUILD_SCM_VERSION="$(echo ${BUILD_SCM_VERSION_RAW} | sed -E 's/-([0-9]+)-g/+\1.sha-/g')""$( if [[ $LOCAL_CHANGES == "true" ]]; then echo ".with-local-changes"; fi)"

  yarn build_all

cd -
  
  shopt -s extglob
  git rm -rf --quiet !(LICENSE|add-build.sh)
  mv ../rxjs/dist/package/* .
  git add .
  git commit -m "rxjs build $BUILD_SCM_VERSION"
  git tag $BUILD_SCM_VERSION
  git log -1

  echo ""
  echo ""
  echo "Successfully staged build $BUILD_SCM_VERSION."
  echo "  Don't forget to publish it with: git push origin --all && git push origin --tags"
