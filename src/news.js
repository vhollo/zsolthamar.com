import _ from 'lodash'
import all from '../site/news/*.md'

export const posts = _.chain(all)
  .map(transform)
  .orderBy('date', 'desc')
  .value()

export function findPost(slug) {
  return _.find(posts, {slug})
}

function transform({filename, metadata, html}) {
  const slug = filename.replace(/.md$/, '')
  const date = new Date(metadata.date)
console.log(metadata)
  return {...metadata, filename, slug, html, date}
}
