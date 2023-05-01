interface HtmlProps {
  children: JSX.Element;
}

const Html = (props: HtmlProps) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>React 2023</title>
      </head>
      <body>
        <div id="root">{props.children}</div>
        <script type="module" src="/src/entry-client.tsx"></script>
      </body>
    </html>
  );
};

export default Html;
