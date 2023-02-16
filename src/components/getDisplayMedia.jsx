export async function getDisplayMedia() {
  const option = {
    video: {
      mandatory: {
        maxWidth: screen.width,
        maxHeight: screen.height,
        maxFrameRate: 60,
      },
    },
  }
  return await navigator.mediaDevices.getDisplayMedia(option)
}

export async function getAudioMedia() {
  const option = { audio: true }
  return await navigator.mediaDevices.getUserMedia(option)
}
