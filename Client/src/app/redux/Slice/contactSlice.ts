import { Contact } from "../../models/Contact";
import { CONTACT_URL } from "../URL";
import { apiSlice } from "./apiSlice";

export const contactApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        sendMail: builder.mutation<void, Contact>({
            query: (body:Contact) => ({
                url: `${CONTACT_URL}`,
                method: 'POST',
                body,
            }),
        }),
    }),
});

export const { useSendMailMutation } = contactApiSlice;

