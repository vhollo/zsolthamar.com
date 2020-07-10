import _ from 'lodash'
import all from '../site/news/*.md'
import showdown from 'showdown'
const converter = new showdown.Converter({
	metadata: false,
})

export const posts = _.chain(all)
  .map(transform)
  .orderBy('sort', 'desc')
  .value()

export function findPost(slug) {
  return _.find(posts, {slug})
}

function transform({filename, metadata, html}) {
  const slug = filename.replace(/.md$/, '')
	const sort = new Date(metadata.date || metadata.pub_date)
	
	const eventdate = {
		"en": metadata.date ? new Date(metadata.date).toLocaleString('en-US', { year: "numeric", month: "short", day: "numeric" }) : '',
		"de": metadata.date ? new Date(metadata.date).toLocaleString('de-DE', { year: "numeric", month: "short", day: "numeric" }) : '',
		"hu": metadata.date ? new Date(metadata.date).toLocaleString('hu-HU', { year: "numeric", month: "short", day: "numeric" }) : ''
	}
	const content = {
		"en": converter.makeHtml(metadata.content.en),
		"de": converter.makeHtml(metadata.content.de),
		"hu": converter.makeHtml(metadata.content.hu)
	} 
return { ...metadata, filename, slug, eventdate, content, sort }
}
