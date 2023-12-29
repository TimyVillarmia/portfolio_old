// 1. Import utilities from `astro:content`
import { z,  defineCollection } from 'astro:content';
// 2. Define your collection(s)
const projectsCollection = defineCollection({ 
    type: 'content',
    schema: ({image}) => 
    z.object({
        title: z.string(),
        tags: z.array(z.string()),
        technologies: z.array(z.string()),
        description: z.string(),
        image: image(),
        project_note: z.string().url().optional(),
        visit_link: z.string().url().optional(),

    }),
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
    'projects': projectsCollection,
};