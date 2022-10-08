import { NextApiResponse, NextApiRequest } from "next";

export interface IRepo {
  id: string;
  name: string;
  html_url: string;
  created_at: string;
  pushed_at: string;
  language: string;
  description: string;
  stargazers_count: number;
  fork: boolean;
}

export interface IUser {
  readonly login: string;
  readonly avatar_url: string;
  readonly name: string;
  readonly bio: string;
}

export type IGithub = {
  user: IUser;
  repos: IRepo[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<any> {
  const userResponse = await fetch(`https://api.github.com/users/elbouchouki`);
  const userReposResponse = await fetch(
    `https://api.github.com/users/elbouchouki/repos?per_page=100`
  );

  const user = await userResponse.json();
  const repositories = await userReposResponse.json();
  const notForked = repositories.filter(
    (repo: any) => !repo.fork || repo.name != "elbouchouki"
  );

  res.setHeader(
    `Cache-Control`,
    `public, s-maxage=1200, stale-while-revalidate=600`
  );

  const sendRepos: IRepo[] = notForked.map(
    ({
      id,
      name,
      html_url,
      created_at,
      pushed_at,
      language,
      description,
      fork,
      stargazers_count,
    }: IRepo) => ({
      id,
      name,
      html_url,
      created_at,
      pushed_at,
      language,
      description,
      fork,
      stargazers_count,
    })
  );
  const sendUser: IUser = {
    avatar_url: user.avatar_url,
    bio: user.bio,
    login: user.login,
    name: user.name,
  };

  return res.status(200).json({
    repos: sendRepos,
    user: sendUser,
  });
}
