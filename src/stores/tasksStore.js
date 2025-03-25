import {writable} from 'svelte/store';

export  const tasks = writable([
	{id:1,title:"coding",completed:false},
	{id:2,title:"reading books",completed:false}
]);

export const addTask = (title) =>{
	tasks.update((items) => [
		...items,
		{id: Date.now(), title,completed:false}

	]);
};

export const toggleTask = (id) =>{
	tasks.update((items) =>
	items.map((task) =>
task.id ===id ? {...task,completed:!task.completed} : task
		)
	);
};


export const deleteTask = (id) => {
	tasks.update((items) =>
		items.filter((task) => task.id !==id));
};



