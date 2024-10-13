import React from "react";
import { ListBlock } from "../../types/block";

const List: React.FC<ListBlock> = (block) => {
    const ListTag = block.content.listType === 'unordered' ? 'ul' : 'ol';
    return (
        <ListTag key={block.id}>
            {block.content.items.map((item: string, index: number) => (
                <li key={index}>{item}</li>
            ))}
        </ListTag>
    );

};

export default List;