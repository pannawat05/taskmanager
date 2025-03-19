import {writable} from 'svelte/store';

export  const tasks = writable([
	{id:1,title:"coding",status:false},
	{id:2,title:"reading books",status:false}
]);

export const addTask = (title) =>{
	tasks.update((items) => [
		...items,
		{id: Date.now(), title,complete:false}

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



