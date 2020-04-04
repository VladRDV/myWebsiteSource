import React from 'react';
import { css } from 'aphrodite';
import { graphql } from 'gatsby';
import Root from '../layout/Root/Root';
import { portfolio_style as pst } from '../styles/page_styles/portfolio_style';
import Project from '../components/Project/Project';
import SkillBar from '../components/SkillBar/SkillBar';
import LangBar from '../components/LangBar/LangBar';

export default ({ location, data }) => {
	const content = data.allAllJson.edges[0].node;
	return (
		<Root location={location}>
			<main className={`${css(pst.main)} normal_font`}>
				<div className={`${css(pst.container)}`}>
					<div className={`${css(pst.currently_learning, pst.border)}`}>
						<h3 className={`${css(pst.part_title)}`}>Currently learning</h3>
						<p className={`${css(pst.upperTxtFormat)}`}>{content.currently_learning}</p>
					</div>
					<div className={`${css(pst.skills, pst.border)}`}>
						<div className={`${css(pst.scrollBarHider)}`}>
							<div className={`${css(pst.scrollBarHiderChild)}`}>
								<h3 className={`${css(pst.part_title)}`}>My skill list</h3>
								<ul className={`${css(pst.skills_list, pst.upperTxtFormat)}`}>{renderSkills(content.skills.programmer_skills.set)}</ul>
								<h3 className={`${css(pst.part_title)}`}>Natural languages</h3>
								<ul className={`${css(pst.skills_list, pst.upperTxtFormat)}`}>{renderLangs(content.skills.human_languages.set)}</ul>
							</div>
						</div>
						<div className={`${css(pst.gradient)}`} />
					</div>
					<div className={`${css(pst.projectsContainer, pst.border)}`}>
						<h3 className={`${css(pst.projectsTitle, pst.part_title)}`}>Projects I've worked on</h3>
						<ul className={`${css(pst.projects)}`}>{renderProjects(content.projects)}</ul>
					</div>
				</div>
			</main>
		</Root>
	);
};
const renderSkills = (skills) => {
	return skills.map((el, ind) => <SkillBar key={`SkillBar-${ind}`} num={ind} grade={el.grade} color={el.color} skill={el.skill} />);
};
const renderLangs = (langs) => {
	return langs.map((el, ind) => <LangBar key={`SkillBar-${ind}`} grade={el.grade} color={el.color} lang={el.lang} />);
};
const renderProjects = (projects) => {
	return projects.map((el, ind) => (
		<Project title={el.title} contr={el.other_contributors} desc={el.desc} links={el.links_to_project} key={`Project-${ind}`} />
	));
};
export const query = graphql`
	query {
		allAllJson {
			edges {
				node {
					id
					currently_learning
					skills {
						human_languages {
							category_name
							set {
								lang
								grade
								color
							}
						}
						programmer_skills {
							category_name
							set {
								skill
								grade
								color
							}
						}
					}
					projects {
						title
						links_to_project {
							label
							href
						}
						desc
						other_contributors {
							name
							href
						}
					}
				}
			}
		}
	}
`;
