import './tag.css.proxy.js';
/* src\components\tag.svelte generated by Svelte v3.29.0 */
import {
	SvelteComponent,
	append,
	attr,
	detach,
	element,
	init,
	insert,
	is_function,
	listen,
	noop,
	safe_not_equal,
	set_data,
	text
} from "../../web_modules/svelte/internal.js";

function create_fragment(ctx) {
	let button;
	let t0;
	let span;
	let t1;
	let t2;
	let mounted;
	let dispose;

	return {
		c() {
			button = element("button");
			t0 = text(/*tag*/ ctx[0]);
			span = element("span");
			t1 = text("#");
			t2 = text(/*count*/ ctx[1]);
			attr(span, "class", "svelte-11vi90y");
			attr(button, "class", "svelte-11vi90y");
		},
		m(target, anchor) {
			insert(target, button, anchor);
			append(button, t0);
			append(button, span);
			append(span, t1);
			append(span, t2);

			if (!mounted) {
				dispose = listen(button, "click", function () {
					if (is_function(/*setPhotoroll*/ ctx[2])) /*setPhotoroll*/ ctx[2].apply(this, arguments);
				});

				mounted = true;
			}
		},
		p(new_ctx, [dirty]) {
			ctx = new_ctx;
			if (dirty & /*tag*/ 1) set_data(t0, /*tag*/ ctx[0]);
			if (dirty & /*count*/ 2) set_data(t2, /*count*/ ctx[1]);
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(button);
			mounted = false;
			dispose();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { tag } = $$props;
	let { count } = $$props;
	let { setPhotoroll } = $$props;

	$$self.$$set = $$props => {
		if ("tag" in $$props) $$invalidate(0, tag = $$props.tag);
		if ("count" in $$props) $$invalidate(1, count = $$props.count);
		if ("setPhotoroll" in $$props) $$invalidate(2, setPhotoroll = $$props.setPhotoroll);
	};

	return [tag, count, setPhotoroll];
}

class Tag extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { tag: 0, count: 1, setPhotoroll: 2 });
	}
}

export default Tag;