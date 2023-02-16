export async function getDisplayMedia() {
  const option = { video: true }
  return await navigator.mediaDevices.getDisplayMedia(option)
}

export async function getAudioMedia() {
  const option = { audio: true }
  return await navigator.mediaDevices.getUserMedia(option)
}
