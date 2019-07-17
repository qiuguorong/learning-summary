export default class MediaTrace {
  constructor (media, type, id) {
    this.media = media
    this.type = type
    this.id = id
    this.init()
  }
  init () {
    if (!window.WeiyiStatSDK) {
      console.error('该页面未引用埋点sdk')
      return false
    }
    if (!this.media) {
      console.error('只能是音频或视频')
      return false
    }
  }
  startTimer () {}
  onMediaPause () {}
  onMediaEnded () {}
  onPageUnload () {}
}
