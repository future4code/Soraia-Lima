export type taskInputDTO = {
   title: string,
   description: string,
   deadline: string,
   authorId: string
}

export type task = taskInputDTO & { id: string }

export type taskOutputDTO = {
   id: string,
   title: string,
   description: string,
   deadline: string,
   authorId: string
   
}