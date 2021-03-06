import './galleryNav.css.proxy.js';
/* src\components\galleryNav.svelte generated by Svelte v3.29.0 */
import {
	SvelteComponent,
	append,
	attr,
	check_outros,
	create_component,
	destroy_component,
	detach,
	element,
	empty,
	group_outros,
	init,
	insert,
	mount_component,
	outro_and_destroy_block,
	safe_not_equal,
	space,
	transition_in,
	transition_out,
	update_keyed_each
} from "../../web_modules/svelte/internal.js";

import { photos } from "../stores/photos.js";
import { photoroll } from "../stores/photoroll.js";
import Tag from "./tag.js";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[4] = list[i];
	return child_ctx;
}

function get_each_context_1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[7] = list[i];
	return child_ctx;
}

// (23:0) {#each tags as tag (tag)}
function create_each_block_1(key_1, ctx) {
	let div;
	let tag;
	let current;

	function func(...args) {
		return /*func*/ ctx[2](/*tag*/ ctx[7], ...args);
	}

	tag = new Tag({
			props: {
				tag: /*tag*/ ctx[7].tag,
				count: /*tag*/ ctx[7].count,
				setPhotoroll: func
			}
		});

	return {
		key: key_1,
		first: null,
		c() {
			div = element("div");
			create_component(tag.$$.fragment);
			attr(div, "class", "tag svelte-jcdadb");
			this.first = div;
		},
		m(target, anchor) {
			insert(target, div, anchor);
			mount_component(tag, div, null);
			current = true;
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;
		},
		i(local) {
			if (current) return;
			transition_in(tag.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(tag.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			destroy_component(tag);
		}
	};
}

// (33:0) {#each months as month (month)}
function create_each_block(key_1, ctx) {
	let div;
	let tag;
	let t;
	let current;

	function func_1(...args) {
		return /*func_1*/ ctx[3](/*month*/ ctx[4], ...args);
	}

	tag = new Tag({
			props: {
				tag: /*month*/ ctx[4].month,
				count: /*month*/ ctx[4].count,
				setPhotoroll: func_1
			}
		});

	return {
		key: key_1,
		first: null,
		c() {
			div = element("div");
			create_component(tag.$$.fragment);
			t = space();
			attr(div, "class", "tag svelte-jcdadb");
			this.first = div;
		},
		m(target, anchor) {
			insert(target, div, anchor);
			mount_component(tag, div, null);
			append(div, t);
			current = true;
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;
		},
		i(local) {
			if (current) return;
			transition_in(tag.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(tag.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			destroy_component(tag);
		}
	};
}

function create_fragment(ctx) {
	let h40;
	let t1;
	let each_blocks_1 = [];
	let each0_lookup = new Map();
	let t2;
	let h41;
	let t4;
	let each_blocks = [];
	let each1_lookup = new Map();
	let each1_anchor;
	let current;
	let each_value_1 = /*tags*/ ctx[0];
	const get_key = ctx => /*tag*/ ctx[7];

	for (let i = 0; i < each_value_1.length; i += 1) {
		let child_ctx = get_each_context_1(ctx, each_value_1, i);
		let key = get_key(child_ctx);
		each0_lookup.set(key, each_blocks_1[i] = create_each_block_1(key, child_ctx));
	}

	let each_value = /*months*/ ctx[1];
	const get_key_1 = ctx => /*month*/ ctx[4];

	for (let i = 0; i < each_value.length; i += 1) {
		let child_ctx = get_each_context(ctx, each_value, i);
		let key = get_key_1(child_ctx);
		each1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
	}

	return {
		c() {
			h40 = element("h4");
			h40.textContent = "browse photos by tag:";
			t1 = space();

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].c();
			}

			t2 = space();
			h41 = element("h4");
			h41.textContent = "browse photos by month:";
			t4 = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each1_anchor = empty();
			attr(h40, "class", "svelte-jcdadb");
			attr(h41, "class", "svelte-jcdadb");
		},
		m(target, anchor) {
			insert(target, h40, anchor);
			insert(target, t1, anchor);

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].m(target, anchor);
			}

			insert(target, t2, anchor);
			insert(target, h41, anchor);
			insert(target, t4, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert(target, each1_anchor, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			if (dirty & /*tags, photoroll, photos*/ 1) {
				const each_value_1 = /*tags*/ ctx[0];
				group_outros();
				each_blocks_1 = update_keyed_each(each_blocks_1, dirty, get_key, 1, ctx, each_value_1, each0_lookup, t2.parentNode, outro_and_destroy_block, create_each_block_1, t2, get_each_context_1);
				check_outros();
			}

			if (dirty & /*months, photoroll, photos*/ 2) {
				const each_value = /*months*/ ctx[1];
				group_outros();
				each_blocks = update_keyed_each(each_blocks, dirty, get_key_1, 1, ctx, each_value, each1_lookup, each1_anchor.parentNode, outro_and_destroy_block, create_each_block, each1_anchor, get_each_context);
				check_outros();
			}
		},
		i(local) {
			if (current) return;

			for (let i = 0; i < each_value_1.length; i += 1) {
				transition_in(each_blocks_1[i]);
			}

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o(local) {
			for (let i = 0; i < each_blocks_1.length; i += 1) {
				transition_out(each_blocks_1[i]);
			}

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d(detaching) {
			if (detaching) detach(h40);
			if (detaching) detach(t1);

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].d(detaching);
			}

			if (detaching) detach(t2);
			if (detaching) detach(h41);
			if (detaching) detach(t4);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].d(detaching);
			}

			if (detaching) detach(each1_anchor);
		}
	};
}

function instance($$self) {
	const tags = photos.tags;
	const months = photos.months;
	const func = tag => photoroll.set(photos.byTag(tag.tag));
	const func_1 = month => photoroll.set(photos.byMonth(month.month));
	return [tags, months, func, func_1];
}

class GalleryNav extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, {});
	}
}

export default GalleryNav;