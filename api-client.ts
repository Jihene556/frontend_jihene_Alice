/*
const lists = ['Work Tasks', 'Personal Tasks', 'Shopping List']
const listItems: Record<string, string[]> = {
    'Work Tasks': ['Buy groceries', 'Complete React project', 'Exercise for 30 minutes', 'Read a book chapter'],
    'Personal Tasks': ['Buy groceries', 'Complete React project', 'Exercise for 30 minutes', 'Read a book chapter'],
    'Shopping List': ['Buy groceries', 'Complete React project', 'Exercise for 30 minutes', 'Read a book chapter']
}
*/
import axios from 'axios'
export const apiClient = {
getLists: async () => {

    return axios.get('http://localhost:3000/lists').then(res => res.data)
},
getTodos: async (listId: string) => {
    try {
      const response = await axios.get(`http://localhost:3000/lists/${listId}/items`);
      return response.data; 
    } catch (error) {
      console.error("Erreur lors de la récupération des todos:", error);
      throw error;
    }
  },

  
  addList: async (listName: string) => {
    try {
      const response = await axios.post('http://localhost:3000/lists', { description: listName });
      return response.data;  
    } catch (error) {
      console.error("Erreur lors de l'ajout de la liste:", error);
      throw error;
    }
  },


  addTodo: async (listId: string, todoName: string) => {
    try {
      const response = await axios.post(`http://localhost:3000/lists/${listId}/items`, { name: todoName });
      return response.data; 
    } catch (error) {
      console.error("Erreur lors de l'ajout du todo:", error);
      throw error;
    }
  },
}
/*
export const apiClient = {
    getLists: async () => {
        return Promise.resolve(lists)
    },
    addList: async (listName: string) => {
        lists.push(listName)
        console.debug('-- addList', listName, lists);
        return Promise.resolve(lists)
    },
    getTodos: async (listName: string): Promise<string[]> => {
        return Promise.resolve(listItems[listName])
    },
    addTodo: async (listName: string, todo: string) => {
        console.debug('-- addTodo', listName, todo, listItems);
        if (!listItems[listName]) {
            listItems[listName] = []
        }
        listItems[listName].push(todo)
        return Promise.resolve(listItems[listName])
    }
}
    */
