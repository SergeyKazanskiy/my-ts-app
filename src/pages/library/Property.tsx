import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { TabBar } from '../../containers/TabBar';
import { propertyActions } from '../../store/reducers/PropertyReducer';


interface TabItem {
  id: string;
  title: string;
}

interface TabsState {
  items: TabItem[];
}

const mapStateToProps = (state: { property: TabsState }) => ({
  items: state.property.items,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onReorderTabs: (newOrder: TabItem[]) => dispatch(propertyActions.reorderTabs(newOrder)),
});

export const ConnectedProperty = connect(mapStateToProps, mapDispatchToProps)(TabBar);