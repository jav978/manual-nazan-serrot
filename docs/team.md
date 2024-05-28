---
lauout: page
---

<script stup>
	import {VPTeamPage,
	VPTeamPageTitle,
	VPTeamMembers
	} from 'vitepress/theme'


const coreMembers = [
	{

		avatar:'https://www.github.com/yyx990803.png',
		name:'Evan You',
		title:'Creator of Vue',
		description:'Progammer ',
		link:[
			{icon:'github',link:'https://github.com/yyx990803'},
			{icon:'twitter',link:'https://twitter.com/youyuxi'},
		]
	}
];

const partners=[
	{
		avatar:'https://www.github.com/yyx990803.png',
		name:'Evan You',
		title:'Creator of Vue',
		description:'Progammer ',
		link:[
			{icon:'github',link:'https://github.com/yyx990803'},
			{icon:'twitter',link:'https://twitter.com/youyuxi'},
		]

	},
	{
		avatar:'https://www.github.com/yyx990803.png',
		name:'Evan You',
		title:'Creator of Vue',
		description:'Progammer ',
		link:[
			{icon:'github',link:'https://github.com/yyx990803'},
			{icon:'twitter',link:'https://twitter.com/youyuxi'},
		]

	}
]
</script>

<VPTeamPage>
	<VPTeamPageTitle>
		<template #title>Core Contributors</template>
		<template #lead>This are the core contributors</template>
	</VPTeamPageTitle>

</VPTeamPage>
