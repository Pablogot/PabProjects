import React from 'react'
import * as Markdown from 'react-markdown'

export default function BlogContent({ title, icon, limit, children, content }, props) {
    return (
        <article className="tile is-child bg_green post">
            <a className="post__category right" href="">holidays</a>
            <div className="post__icon center">
                <figure className="image is-64x64">
                    <i className={`icon is-large fas fa-3x ${icon}`}></i>
                </figure>
            </div>
            <h1 className="post__title center">{title}</h1>
            <div className="post__content">
                <Markdown
                    source={
                        limit
                            ? content.split(" ").splice(0, limit).join(" ").concat('...')
                            : content
                    }
                />
            </div>
            {children}
        </article>
    )
}