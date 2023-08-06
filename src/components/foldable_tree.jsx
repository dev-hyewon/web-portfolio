import React from 'react';
import './foldable_tree.css';

/**
 * 펼치기/접기가 가능한 트리 노드
 * @param {Object} props - 컴포넌트의 속성 객체
 * @param {Object} props.node - 트리 노드 객체
 * @param {string} props.node.label - 해당 노드의 레이블
 * @param {boolean} [props.node.open=false] - 자식 노드 표시 여부
 * @param {Array<Object>} [props.node.children=undefind] - 자식 노드의 배열
 * @returns {JSX.Element} - 렌더링된 트리 노드 컴포넌트
 */
const FoldableTree = ({ node }) => {
  const TODAY = new Date().getTime();
  return <SubTree id={`tree_${TODAY}`} {...node} />;
};

/**
 * 재귀 함수에 사용하기 위한 서브 트리 노드
 *
 * @param {Object} node - 트리 노드 객체
 * @param {boolean} node.id - 해당 트리 노드의 id
 * @param {string} node.label - 해당 노드의 레이블
 * @param {boolean} [node.open=false] - 자식 노드 표시 여부
 * @param {Array<Object>} [node.children=undefind] - 자식 노드의 배열
 * @returns {JSX.Element} - 렌더링된 트리 노드 컴포넌트
 */
const SubTree = ({ id, open, label, children }) => {
  return (
    <details open={open}>
      <summary>{`${label}`}</summary>
      <ul>
        {children?.map((node, i) => (
          <li key={`${id}-${i}`}>
            {node.children ? (
              <SubTree id={`${id}-${i}`} {...node} />
            ) : (
              <LeafNode {...node} />
            )}
          </li>
        ))}
      </ul>
    </details>
  );
};

/**
 * 단말 노드
 *
 * @param {Object} node - 단말 노드 객체
 * @param {string} node.label - 해당 노드의 레이블
 * @returns {string} - <li> 태그에 표시될 문구
 */
const LeafNode = (node) => {
  return node.label;
};

export default FoldableTree;
