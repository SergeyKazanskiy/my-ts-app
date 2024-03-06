import { sectionActions, ISection } from '../../../../store/reducers/library/SectionReducer';
import type { RootState } from '../../../../store/store'


export function AddSection(
    sectionName: string,
    index: number
): any {
    return (dispatch: Function, getState: Function) => {
        const { section } = getState() as RootState;

        const current: ISection = section.items[0];
        dispatch(sectionActions.removeItem());
    };
}