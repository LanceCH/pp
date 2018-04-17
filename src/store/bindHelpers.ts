import { Getter, Mutation, Action, namespace } from 'vuex-class'

// module header
export const HeaderGetter = namespace('header', Getter)
export const HeaderMutation = namespace('header', Mutation)
export const HeaderAction = namespace('header', Action)
