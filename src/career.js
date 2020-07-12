import _ from 'lodash'
import post from '../site/pages/career.md'

/* export const posts = _.chain(all)
  .map(transform)
  .orderBy('date', 'desc')
  .value() */

export function findPost(slug) {
	//console.log(post)
  return post
}

/* function transform({filename, metadata, html}) {
  const slug = filename.replace(/.yml$/, '')
  const date = new Date(metadata.date)

  return {...metadata, filename, slug, html, date}
} */
