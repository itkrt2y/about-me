import Head from "next/head";
import { FunctionComponent } from "preact";
import { Timeline } from "~/components/Timeline";
import { title } from "~/lib/header";

type BlogType = {
  title: string;
  url: string;
  publishedAt: string;
};

const blogs: BlogType[] = [
  {
    title: "Rails + TypeScript + webpack環境構築",
    url: "https://link.medium.com/MT5zu3jyN0",
    publishedAt: "Feb 1, 2019",
  },
  {
    title: "Railsのポリモーフィック関連とはなんなのか",
    url: "https://qiita.com/itkrt2y/items/32ad1512fce1bf90c20b",
    publishedAt: "Dec 4, 2016",
  },
  {
    title: "ghq, peco, hubで快適Gitライフを手に入れよう！",
    url: "https://qiita.com/itkrt2y/items/0671d1f48e66f21241e2",
    publishedAt: "Dec 23, 2015",
  },
];

const Blogs: FunctionComponent<{ blogs: BlogType[] }> = ({ blogs }) => (
  <Timeline>
    {blogs.map((blog) => (
      <Timeline.Item dateStr={blog.publishedAt} key={blog.title}>
        <a
          href={blog.url}
          className="text-blue-300 hover:text-blue-100 underline ml-3 w-max"
        >
          {blog.title}
        </a>
      </Timeline.Item>
    ))}
  </Timeline>
);

export default function Page() {
  return (
    <>
      <Head>
        <title>{title("Blog")}</title>
      </Head>

      <div className="px-3">
        <Blogs blogs={blogs} />
      </div>
    </>
  );
}
