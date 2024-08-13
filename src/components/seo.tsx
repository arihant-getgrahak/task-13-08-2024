import { Helmet } from "react-helmet";
export const Seo = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={desc} />
    </Helmet>
  );
};
