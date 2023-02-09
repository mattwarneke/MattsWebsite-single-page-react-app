
start /wait CopyUnityPublish.bat

call npm run build

start /wait CopyNPMPublishToGitHubPagesRepo.bat

start /wait PushGitHubPagesSite.bat