import { InMemoryCache, makeVar } from "@apollo/client";

export const confirmTaskDeleteOpenVar = makeVar({ isOpen: false });

export const cache = new InMemoryCache({
	typePolicies: {
		Query: {
			fields: {
				confirmTaskDeleteOpen: {
					read() {
						return confirmTaskDeleteOpenVar();
					},
				},
			},
		},
	},
});
