import React from 'react';
import { css } from 'aphrodite';
import { graphql } from 'gatsby';
import Root from '../layout/Root/Root';
import { portfolio_style as pst } from '../styles/page_styles/portfolio_style';
import Project from '../components/Project/Project'
import SkillBar from '../components/SkillBar/SkillBar';
import LangBar from '../components/LangBar/LangBar';

export default ({ location, data }) => {
	const content = data.allJson.edges[0].node;
	return (
		<Root location={location}>
			<main className={`${css(pst.main)} normal_font`}> 
				<div className={`${css(pst.container)}`}>
					<div className={`${css(pst.currently_learning, pst.border)}`}>
						<h3 className={`${css(pst.part_title)}`}>Currently learning</h3>
						<p className={`${css(pst.upperTxtFormat)}`}>
							{content.currently_learning}
						</p>
					</div>
					<div className={`${css(pst.skills, pst.border)}`}>
						<div className={`${css(pst.scrollBarHider)}`}>
							<h3 className={`${css(pst.part_title)}`}>My skill list</h3>
							<ul className={`${css(pst.skills_list, pst.upperTxtFormat)}`}>
								{renderSkills(content.skills.programmer_skills.set)}
							</ul>
							<h3 className={`${css(pst.part_title)}`}>Natural languages</h3>
							<ul className={`${css(pst.skills_list, pst.upperTxtFormat)}`}>
								{renderLangs(content.skills.human_languages.set)}
							</ul>
						</div>
						<div className={`${css(pst.gradient)}`}/>
					</div>
					<div className={`${css(pst.projectsContainer, pst.border)}`}>
						<h3 className={`${css(pst.projectsTitle, pst.part_title)}`}>Projects I've worked on</h3>
						<ul className={`${css(pst.projects)}`}>
							{renderProjects(content.projects)}
						</ul>
					</div>
				</div>
			</main>
		</Root>
	)
}
const renderSkills = (skills) => {
	return(
		skills.map((el, ind)=>(		
			<SkillBar 
				key={`SkillBar-${ind}`} 
				num={ind} 
				grade={el.grade} 
				color={el.color} 
				skill={el.skill}
			/>
		))
	);
}
const renderLangs = (langs) => {
	return(
		langs.map((el, ind)=>(		
			<LangBar 
				key={`SkillBar-${ind}`} 
				grade={el.grade} 
				color={el.color} 
				lang={el.lang}
			/>
		))
	);
}
const renderProjects = (projects) => {
	return(
		projects.map((el, ind)=>(
			<Project 
				title={el.title}
				contr={el.other_contributors}
				desc={el.desc}
				href={el.href}
				key={`Project-${ind}`}
			/>		
		))
	);
}
export const query = graphql`
query {
	allJson {
		edges {
			node {
				id
				currently_learning,
				skills{
					human_languages{
						category_name,
						set{
							lang,
							grade,
							color
						}
					},
					programmer_skills{
						category_name,
						set{
							skill,
							grade,
							color
						}
					},
				},
				
				projects{
					title,
					href,
					desc,
					other_contributors{
						name, 
						href
					}
				}
			}
		}
	}
}
`

// {
//   allJson {
//     edges {
//       node {
//         id
//         currently_learning
//       }
//     }
//   }
// }
  {/* this is going to be a grid of squares with nemes of category on them
			(each square with bg img and dark transparent filter over them, on hover filter fades away) */}
			

			// [{
			// 	"currently_learning":"Upgrading my Django/Python skills.\nLearning Django Channels.",
			// 	"skills":{
			// 		"programmer_skills":{
			// 			"category_name":"programmer_skills",
			// 			"set":[
			// 				{
			// 					"skill":"HTML5",
			// 					"desc":"Confident with the language",
			// 					"grade":"95%",
			// 					"color":"#e34f26"
			// 				},
			// 				{
			// 					"skill":"CSS3",
			// 					"desc":"Confident with the language",
			// 					"grade":"95%",
			// 					"color":"#0099e5"
			// 				},
			// 				{
			// 					"skill":"JavaScript",
			// 					"desc":"Confident with the language",
			// 					"grade":"90%",
			// 					"color":"#ffea11"
			// 				},
			// 				{
			// 					"skill":"React",
			// 					"desc":"Confident with jsx syntax,Redux & state management in general",
			// 					"grade":"90%",
			// 					"color":"#00d8ff"
			// 				},
			// 				{
			// 					"skill":"Gatsby",
			// 					"desc":"Confident with jsx syntax,Redux & state management in general",
			// 					"grade":"60%",
			// 					"color":"indigo"
			// 				},
			// 				{
			// 					"skill":"React Native",
			// 					"desc":"Confident with jsx syntax,Redux & state management in general",
			// 					"grade":"70%",
			// 					"color":"#006188"
			// 				},
			// 				{
			// 					"skill":"Node.js",
			// 					"desc":"Confident with jsx syntax,Redux & state management in general",
			// 					"grade":"60%",
			// 					"color":"#3ac21a"
			// 				},
			// 				{
			// 					"skill":"Express",
			// 					"desc":"Confident with jsx syntax,Redux & state management in general",
			// 					"grade":"60%",
			// 					"color":"lightgrey"
			// 				},
			// 				{
			// 					"skill":"Git",
			// 					"desc":"",
			// 					"grade":"70%",
			// 					"color":"#bd2c00"
			// 				},
			// 				{
			// 					"skill":"Python",
			// 					"desc":"Confident with jsx syntax,Redux & state management in general",
			// 					"grade":"80%",
			// 					"color":"#306998"
			// 				},
			// 				{
			// 					"skill":"Django",
			// 					"desc":"Confident with basic usage, database communication, REST Framework",
			// 					"grade":"50%",
			// 					"color":"green"
			// 				}
			
			// 			]
			// 		},
			// 		"human_languages":{
			// 			"category_name":"human_languages",
			// 			"set":[
			// 				{
			// 					"lang":"Russian", 
			// 					"grade":"Native",
			// 					"color":"red"
			// 				},
			// 				{
			// 					"lang":"Serbian", 
			// 					"grade":"Native",
			// 					"color":"blue"
			// 				},
			// 				{
			// 					"lang":"English", 
			// 					"grade":"Fluent",
			// 					"color":"skyblue"
			// 				},
			// 				{
			// 					"lang":"Spanish", 
			// 					"grade":"Beginner",
			// 					"color":"#fc0"
			// 				}
			// 			]
			// 		}
			
			// 	},
			// 	"projects":[
			// 		{
			// 			"title":"Poslonaut website",
			// 			"href":"https://www.poslonaut.rs/",
			// 			"desc":"Job searching website",
			// 			"other_contributors":[
			// 				{"name":"Milan Šarić", "href":"https://www.linkedin.com/in/milan-%C5%A1ari%C4%87/"}, 
			// 				{"name":"Pavle Popović", "href":"https://www.linkedin.com/in/pavle-popovi%C4%87-4718b9173/"}
			// 			]
			// 		},
			// 		{
			// 			"title":"Poslonaut kiosk job stand",
			// 			"href":"",
			// 			"desc":"Kiosk app for job searching",
			// 			"other_contributors":[
			// 				{"name":"Nemanja Stefanović", "href":"https://www.linkedin.com/in/nemanjastefanovic/"}
			// 			]
			// 		},
			// 		{
			// 			"title":"Poslonaut mobile app",
			// 			"href":"https://play.google.com/store/apps/details?id=com.devion.poslonaut&hl=en",
			// 			"desc":"Job searching mobile app",
			// 			"other_contributors":[
			// 				{"name":"Milan Šarić", "href":"https://www.linkedin.com/in/milan-%C5%A1ari%C4%87/"}, 
			// 				{"name":"Pavle Popović", "href":"https://www.linkedin.com/in/pavle-popovi%C4%87-4718b9173/"}
			// 			]
			// 		}
			// 	]
			// }]