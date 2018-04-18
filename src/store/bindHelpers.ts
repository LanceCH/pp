import { Getter, Mutation, Action, namespace } from 'vuex-class'

// module header
export const HeaderGetter = namespace('header', Getter)
export const HeaderMutation = namespace('header', Mutation)
export const HeaderAction = namespace('header', Action)

// module appDetail
export const AppDetailGetter = namespace('appDetail', Getter)
export const AppDetailMutation = namespace('appDetail', Mutation)
export const AppDetailAction = namespace('appDetail', Action)
