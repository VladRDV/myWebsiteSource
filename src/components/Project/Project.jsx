import React from 'react';
import { css } from 'aphrodite';
import { project_styles as ps } from './styles/styles';

const Project = ({title, href, desc, contr}) => {
    const oth_str = `Other contributors:`;
    return (
        <li className={`${css(ps.project)}`}>
            <h6 className={`${css(ps.alignCenter,ps.ptoject_name)}`}>
                {title}
            </h6>
            <hr className={`${css(ps.divider, ps.divider_1)}`}/>
            <p className={`${css(ps.alignCenter,ps.project_desc)}`}>
                {desc}
            </p>
            <hr className={`${css(ps.divider, ps.divider_2)}`}/>
            <p className={`${css(ps.alignCenter,ps.other_contributors)}`}>
                <span>{oth_str}</span>
                {renderContributors(contr, title)}
            </p>
            <hr className={`${css(ps.divider, ps.divider_3)}`}/>
            <div className={`${css(ps.alignCenter,ps.bottom)}`}>
                { href !== '' &&
                    <a
                        href={href}
                        className={`${css(ps.alignCenter,ps.to_project)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {`Visit`}
                    </a>
                }
            </div>
        </li>
    );
}
const renderContributors = (contrArr, title) => (
    contrArr.map((el, ind, arr)=>(
        <a
            key={`${title.replace(/\s/g, '_')}_other_contributar_${ind}`}
            href={el.href}
            className={`${css(ps.contributor)}`}
            target="_blank"
            rel="noopener noreferrer"
        >
            {`${el.name}${ind < (arr.length - 1)?',':''}`}
        </a>
    ))
)
export default Project;