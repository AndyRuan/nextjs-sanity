import { definePreview } from 'next-sanity/preview'
import { projectId, dataset } from './sanity.cliet'

function onPublicAccessOnly() {
  throw new Error(' 没有登录无法预览')
}

if (!projectId || !dataset) {
  throw new Error('没有 projectId 或者 dataset')
}

export const usePreview = definePreview({
  projectId,
  dataset,
  onPublicAccessOnly,
})
