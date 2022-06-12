import loadable from '@loadable/component'

const Home = loadable(() =>
	import(
		/* webpackChunkName: "home" */
		/* webpackPrefetch: true */
		'../components/Home'
	)
)
const Project = loadable(() =>
	import(
		/* webpackChunkName: "Project" */
		'../pages/Project'
	)
)
const ProjectList = loadable(() =>
	import(
		/* webpackChunkName: "ProjectList" */
		'../pages/ProjectList'
	)
)

const routes = [
	{
		path: '/',
		component: Home,
		exact: true,
	},
	{
		path: '/projects',
		component: ProjectList,
	},
	{
		path: '/projects/:project_id',
		component: Project,
	},
]

export default routes
