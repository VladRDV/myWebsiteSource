import React from 'react';
import Root from '../Root/Root';
import { graphql } from 'gatsby';
import { blogpost_styles as bps } from './styles/styles';
import Tag from '../../components/Tag/Tag';
import { css } from 'aphrodite';
const Blogpost = ({ location, data }) => {
    const post = data.markdownRemark
    return (
        <Root location={location}>
            <main className={`${css(bps.main)} normal_font`}>
                <div className={`${css(bps.container)} gen_blogpost`}>
                    <h1 className={`${css(bps.blogpost_title)}`}>{post.frontmatter.title}</h1>
                    <div className={`${css(bps.tags)}`}>
                        {renderTags(post.frontmatter.tags)}
                    </div>
                    <article 
                        className={`${css(bps.article)}`}
                        dangerouslySetInnerHTML={{ __html: post.html }} 
                    />
                </div>
            </main>            
        </Root>
    )
}
const renderTags = (arr, id) =>{
	return arr.map((el, ind, arr)=><Tag key={`tagset_${id}-tag_${ind}`} is_on_black={true} isLast={ind === (arr.length - 1)} txt={el}/>);
}
export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title,
                tags
            }
        }
    }
`;

export default Blogpost;

