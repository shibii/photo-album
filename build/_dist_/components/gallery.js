import './gallery.css.proxy.js';
/* src\components\gallery.svelte generated by Svelte v3.29.0 */
import {
	SvelteComponent,
	action_destroyer,
	append,
	attr,
	check_outros,
	create_component,
	destroy_component,
	detach,
	element,
	group_outros,
	init,
	insert,
	listen,
	mount_component,
	outro_and_destroy_block,
	run_all,
	safe_not_equal,
	space,
	toggle_class,
	transition_in,
	transition_out,
	update_keyed_each
} from "../../web_modules/svelte/internal.js";

import { photos } from "../stores/photos.js";
import Photo from "./photo.js";
import { iobserve } from "../../web_modules/@shibiii/svelte-iobserve.js";
import Spinner from "./spinner.js";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[8] = list[i];
	return child_ctx;
}

// (67:2) {#each gallery as photo (photo)}
function create_each_block(key_1, ctx) {
	let div;
	let photo;
	let current;
	let mounted;
	let dispose;

	photo = new Photo({
			props: {
				photo: /*photo*/ ctx[8],
				sizes: "25vw",
				alt: "generic"
			}
		});

	function click_handler(...args) {
		return /*click_handler*/ ctx[4](/*photo*/ ctx[8], ...args);
	}

	return {
		key: key_1,
		first: null,
		c() {
			div = element("div");
			create_component(photo.$$.fragment);
			attr(div, "class", "photo svelte-93pf5");
			this.first = div;
		},
		m(target, anchor) {
			insert(target, div, anchor);
			mount_component(photo, div, null);
			current = true;

			if (!mounted) {
				dispose = listen(div, "click", click_handler);
				mounted = true;
			}
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;
			const photo_changes = {};
			if (dirty & /*gallery*/ 4) photo_changes.photo = /*photo*/ ctx[8];
			photo.$set(photo_changes);
		},
		i(local) {
			if (current) return;
			transition_in(photo.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(photo.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			destroy_component(photo);
			mounted = false;
			dispose();
		}
	};
}

function create_fragment(ctx) {
	let div1;
	let each_blocks = [];
	let each_1_lookup = new Map();
	let t;
	let div0;
	let spinner;
	let iobserve_action;
	let current;
	let mounted;
	let dispose;
	let each_value = /*gallery*/ ctx[2];
	const get_key = ctx => /*photo*/ ctx[8];

	for (let i = 0; i < each_value.length; i += 1) {
		let child_ctx = get_each_context(ctx, each_value, i);
		let key = get_key(child_ctx);
		each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
	}

	spinner = new Spinner({});

	return {
		c() {
			div1 = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t = space();
			div0 = element("div");
			create_component(spinner.$$.fragment);
			attr(div0, "class", "observer svelte-93pf5");
			toggle_class(div0, "allLoaded", /*allLoaded*/ ctx[1]);
			attr(div1, "id", "scrollbar");
			attr(div1, "class", "gallery svelte-93pf5");
		},
		m(target, anchor) {
			insert(target, div1, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div1, null);
			}

			append(div1, t);
			append(div1, div0);
			mount_component(spinner, div0, null);
			current = true;

			if (!mounted) {
				dispose = [
					listen(div0, "intersection", /*intersection_handler*/ ctx[5]),
					action_destroyer(iobserve_action = iobserve.call(null, div0, { delay: 2500, cooldown: 500 }))
				];

				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (dirty & /*selected, gallery*/ 5) {
				const each_value = /*gallery*/ ctx[2];
				group_outros();
				each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value, each_1_lookup, div1, outro_and_destroy_block, create_each_block, t, get_each_context);
				check_outros();
			}

			if (dirty & /*allLoaded*/ 2) {
				toggle_class(div0, "allLoaded", /*allLoaded*/ ctx[1]);
			}
		},
		i(local) {
			if (current) return;

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			transition_in(spinner.$$.fragment, local);
			current = true;
		},
		o(local) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			transition_out(spinner.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div1);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].d();
			}

			destroy_component(spinner);
			mounted = false;
			run_all(dispose);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { selected } = $$props;
	let all = photos.all();
	let loaded = 10;
	let allLoaded = false;

	const more = batchSize => {
		if (!allLoaded) {
			$$invalidate(6, loaded += batchSize);

			if (loaded >= all.length) {
				$$invalidate(6, loaded = all.length);
				$$invalidate(1, allLoaded = true);
			}
		}
	};

	const click_handler = photo => {
		$$invalidate(0, selected = photo);
	};

	const intersection_handler = () => more(3);

	$$self.$$set = $$props => {
		if ("selected" in $$props) $$invalidate(0, selected = $$props.selected);
	};

	let gallery;

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*loaded*/ 64) {
			$: $$invalidate(2, gallery = all.slice(0, loaded));
		}
	};

	return [selected, allLoaded, gallery, more, click_handler, intersection_handler];
}

class Gallery extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { selected: 0 });
	}
}

export default Gallery;