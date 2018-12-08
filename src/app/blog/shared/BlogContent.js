import React from 'react'
import * as Markdown from 'react-markdown'

export default function BlogContent({ title, icon, limit, children, content }, props) {
    return (
        <article className="tile is-child bg_green post">
            <a class="post__category right" href="">holidays</a>
            <div className="post__icon center">
                <figure className="image is-64x64">
                    <i className={`icon is-large fas fa-3x ${icon}`}></i>
                </figure>
            </div>
            <h1 class="post__title center">{title}</h1>
            <div class="post__content">
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