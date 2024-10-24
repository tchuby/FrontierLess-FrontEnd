"use client";

import Link from "@/components/Link";
import React, { useState } from "react";
import Profile from "@/components/Profile"; // Importando Profile

type Project = {
  key: number;
  pais: string;
  status: string;
  tipo: string;
  img: string;
  autor: string;
};

const initialItems: Project[] = [
  {
    key: 1,
    pais: "",
    status: "",
    tipo: "",
    img: "/img/australia.png",
    autor: "",
  },
  {
    key: 2,
    pais: "",
    status: "",
    tipo: "",
    img: "/img/australia.png",
    autor: "",
  },
  // Adicione mais itens conforme necessário
];

export default function Feed() {
  const [selectedProject, setSelectedProject] = useState<Item | null>(null);
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState("");

  // Simula pegar os projetos do Profile
  const [projectsFromProfile, setProjectsFromProfile] = useState(initialItems); // Aqui você pode pegar os projetos reais do Profile

  const handleProjectClick = (project: Item) => {
    setSelectedProject(project);
    setComments([]); // Limpa os comentários ao selecionar um novo projeto
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment(""); // Limpa o campo de entrada após o envio
    }
  };

  return (
    <div className="container mx-auto p-6 flex">
      <div className="w-2/3 pr-6">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold">Feed de Projetos</h1>
        </div>
        <div className="grid grid-cols-1 gap-6">
          {projectsFromProfile.map((item) => (
            <div
              key={item.key}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
              onClick={() => handleProjectClick(item)}
            >
              <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-1/3 pl-6">
        {selectedProject ? (
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold mb-4">{selectedProject.title}</h2>
            <div className="mb-4">
              <h3 className="font-semibold">Comentários:</h3>
              <div className="space-y-2">
                {comments.length > 0 ? (
                  comments.map((comment, index) => (
                    <p key={index} className="text-gray-700">{comment}</p>
                  ))
                ) : (
                  <p className="text-gray-500">Nenhum comentário ainda.</p>
                )}
              </div>
            </div>
            <form onSubmit={handleCommentSubmit} className="flex">
              <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="border rounded-lg p-2 flex-grow mr-2"
                placeholder="Adicione um comentário..."
              />
              <button type="submit" className="bg-blue-500 text-white font-semibold rounded-lg px-4 hover:bg-blue-600">
                Comentar
              </button>
            </form>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-4">
            <p className="text-gray-500">Selecione um projeto para ver os comentários.</p>
          </div>
        )}
      </div>

      <div className="mt-6 text-center w-full">
        <Link href="/" className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600">
          Ir para Home
        </Link>
      </div>
    </div>
  );
}
