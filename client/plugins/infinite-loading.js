import Vue from 'vue'
import InfiniteLoading from 'vue-infinite-loading'

Vue.use(InfiniteLoading, {
	props: {
		spinner: 'spiral',
		/* other props need to configure */
	},
	system: {
		throttleLimit: 50,
		/* other settings need to configure */
	},
	slots: {
		noMore: 'No more Projects', // you can pass a string value
		error: '', // you also can pass a Vue component as a slot
	},
});