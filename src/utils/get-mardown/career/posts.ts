import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
// config
import { defaultLocale, CAREER_POSTS_DIRECTORY } from '../../../config';

// ----------------------------------------------------------------------

const slugs = fs.readdirSync(CAREER_POSTS_DIRECTORY);

const getFullPath = (slug: string, locale: string) =>
  join(CAREER_POSTS_DIRECTORY, slug, locale === defaultLocale ? 'index.md' : `index.${locale}.md`);

// ----------------------------------------------------------------------

export function getAllPosts(locale: string) {
  const posts = slugs
    .map((slug) => {
      const fullPath = getFullPath(slug, locale);

      if (!fs.existsSync(fullPath)) return;

      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data: frontmatter } = matter(fileContents);

      return { slug, frontmatter };
    })
    .filter((post) => post);

  return posts;
}

// ----------------------------------------------------------------------

export async function getPostData(slug: string, locale: string) {
  const fullPath = getFullPath(slug, locale);

  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const { data: frontmatter, content } = matter(fileContents);

  return {
    frontmatter,
    slug,
    content,
  };
}

// ----------------------------------------------------------------------

export function getAllPostSlugs(locales: string[]) {
  const paths: {
    params: { slug: string };
    locale: string;
  }[] = [];

  for (const slug of slugs) {
    for (const locale of locales) {
      const fullPath = getFullPath(slug, locale);

      if (!fs.existsSync(fullPath)) {
        continue;
      }

      paths.push({ params: { slug }, locale });
    }
  }

  return paths;
}
