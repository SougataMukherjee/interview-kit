import { connect } from 'react-redux'
import type { RootState } from '../reducers'
import { addTodo, toggleTodo, removeTodo } from '../actions'
import { getTodoList, getPendingCount } from '../selectors'
import { Todo } from '../components' // ✅ DIRECT component import

const mapStateToProps = (state: RootState) => ({
  todos: getTodoList(state),
  pendingCount: getPendingCount(state),
})

const mapDispatchToProps = {
  onAddTodo: addTodo,
  onToggleTodo: toggleTodo,
  onRemoveTodo: removeTodo,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo)
