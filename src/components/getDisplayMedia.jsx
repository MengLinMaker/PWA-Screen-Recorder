export default async function getDisplayMedia() {
  const option = {
    video: {
      mandatory: {
        maxWidth: 1920,
        maxHeight: 1080,
        maxFrameRate: 60,
      },
    },
    audio: true,
    systemAudio: "include",
  }
  return await navigator.mediaDevices.getDisplayMedia(option)
}
