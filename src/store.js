import Vue from 'vue'
import Vuex from 'vuex'
import EventService from '@/services/EventService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      id: 'abc123',
      name: 'Adam Jahr'
    },
    categories: [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community'
    ],
    todos: [
      {
        id: 1,
        text: '...',
        done: true
      },
      {
        id: 2,
        text: '...',
        done: false
      },
      {
        id: 3,
        text: '...',
        done: true
      },
      {
        id: 4,
        text: '...',
        done: false
      }
    ],
    events: [
      {
        id: 1,
        title: '...',
        organizer: '...'
      },
      {
        id: 2,
        title: '...',
        organizer: '...'
      },
      {
        id: 3,
        title: '...',
        organizer: '...'
      },
      {
        id: 4,
        title: '...',
        organizer: '...'
      }
    ]
  },
  mutations: {
    // Adds event to state.events.
    ADD_EVENT(state, event) {
      state.events.push(event)
    }
  },
  actions: {
    // Post to EventService and commit ADD_EVENT
    createEvent({ commit }, event) {
      return EventService.postEvent(event).then(() => {
        commit('ADD_EVENT', event)
      })
    }
  },
  getters: {
    catLength: state => {
      return state.categories.length
    },
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    activeTodosCount: state => {
      return state.todos.filter(todo => !todo.done).length
    },
    getEventById: state => id => {
      return state.events.find(event => event.id === id)
    }
  }
})
