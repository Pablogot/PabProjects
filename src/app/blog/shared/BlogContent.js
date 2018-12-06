import React from 'react'
import * as Markdown from 'react-markdown'

export default function BlogContent({ title, icon, limit, children, content }, props) {
    return (
        <article className="media">
            <div className="media-left">
                <figure className="image is-64x64">
                    <svg src={icon} alt="Image" />
                </figure>
            </div>
            <div className="media-content">
                <div className="content">
                    <h1>{title}</h1>
                    <Markdown
                        source={
                            limit
                                ? content.split(" ").splice(0, limit).join(" ").concat('...')
                                : content
                        }
                    />
                </div>
                {children}
            </div>
        </article>
    )
}