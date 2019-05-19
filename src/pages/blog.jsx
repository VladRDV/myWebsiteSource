import React from 'react'
import Root from '../layout/Root/Root'
import { Link, graphql } from "gatsby";
import { css } from 'aphrodite';
import { blog_style as bs } from '../styles/page_styles/blog_style';
import Tag from '../components/Tag/Tag';
export default ({ location, data }) => {
	return (
		<Root location={location}>
			<main className={`${css(bs.main)}`}>
				<div className={`${css(bs.container)}`}>
					{renderBlogLinks(data)}
				</div>
			</main>
		</Root>
	)
}
const renderBlogLinks = (data) => (
	data.allMarkdownRemark.edges.map(({ node }) => (
		<Link
			to={node.fields.slug}
			key={node.id}
			className={`${css(bs.blogLink)} normal_font`}
		>
			<h4 className={`${css(bs.linkTitle)}`}>
				{node.frontmatter.title}
				<span className={`${css(bs.titleGrad)}`}/>
			</h4>
			<div className={`${css(bs.linkInfo)}`}>
				<span className={`${css(bs.linkTags)}`}>
					{renderTags(node.frontmatter.tags, node.id)}
					<span className={`${css(bs.tagGrad)}`}/>
				</span>
				<span className={`${css(bs.linkDate)}`}>
					{node.frontmatter.date}
				</span>
			</div>
		</Link> 
	))
)
const renderTags = (arr, id) =>{
	return arr.map((el, ind, arr)=><Tag key={`tagset_${id}-tag_${ind}`} isLast={ind === (arr.length - 1)} txt={el}/>);
}
export const query = graphql`
query {
	allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
		totalCount
		edges {
			node {
				id
				frontmatter {
					date(formatString: "DD, MMM, YYYY")
					title
					tags
				}
				fields {
					slug
				}
				excerpt
			}
		}
		}
	}
`


// {/* bootstrap-like cards with slugs and thumbnails

// 				article page itself shall have a dark and light modes

// 				blogs with videos will have a view in view feature, like YT */}

// 				{/* <h4>{data.allMarkdownRemark.totalCount} Posts</h4> */}
