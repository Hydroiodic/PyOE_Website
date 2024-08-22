import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Typography } from "@material-tailwind/react";

function Post({ content }) {
    // define custom components for markdown rendering
    const markdown_components = {
        code(props) {
            const { children, className, node, ...rest } = props;
            const match = /language-(\w+)/.exec(className || '');
            return match ? (
                <SyntaxHighlighter
                    {...rest}
                    PreTag="div"
                    children={String(children).replace(/\n$/, '')}
                    language={match[1]}
                    style={solarizedlight}
                />
            ) : (
                <code {...rest} className={className}>
                    {children}
                </code>
            );
        },
        h1: ({ children }) =>
            <Typography variant="h2" className="font-bold py-4 text-4xl lg-max:text-3xl lg-max:py-2 text-default-black">
                {children}
            </Typography>,
        h2: ({ children }) =>
            <Typography variant="h3" className="font-bold py-4 text-3xl lg-max:text-2xl lg-max:py-2 text-default-black">
                {children}
            </Typography>,
        h3: ({ children }) =>
            <Typography variant="h4" className="py-3 text-2xl lg-max:text-xl lg-max:py-1 text-default-black">
                {children}
            </Typography>,
        p: ({ children }) =>
            <Typography variant="paragraph" className="py-2 text-xl font-normal lg-max:text-[12pt] lg-max:py-1 text-gray-600">
                {children}
            </Typography>,
    }

    return (
        <div className="w-[70vw] lg-max:w-[90vw] p-12 lg-max:p-4 bg-gray-200 rounded-2xl text-left 
            transition-all duration-100 delay-75">
            <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[]} components={markdown_components}>
                {content}
            </Markdown>
        </div>
    );
}

export default Post;
