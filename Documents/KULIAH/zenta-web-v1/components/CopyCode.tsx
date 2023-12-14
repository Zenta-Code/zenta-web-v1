"use client"
import React from 'react';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaCopy, FaCheck } from 'react-icons/fa';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CopyCode = ({ value }:any) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="code-block rounded-md relative">
      <CopyToClipboard text={value.code} onCopy={handleCopy}>
        <button className="copy-button bg-gray-700 hover:bg-gray-600 text-gray-200 font-medium p-2 rounded-md absolute top-2 right-2">
          <div className="flex items-center">
            {copied ? (
              <>
                <FaCheck className="text-xl text-green-500" />
                <span className="ml-1 text-green-500">Copied</span>
              </>
            ) : (
              <>
                <FaCopy className="text-xl" />
                <span className="ml-1">Copy</span>
              </>
            )}
          </div>
        </button>
      </CopyToClipboard>
      <SyntaxHighlighter
        language={value.language}
        style={dracula}
        wrapLongLines
        showLineNumbers={true}
        customStyle={{
          borderRadius: '12px',
          padding: '1rem',
          fontFamily:
            'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
        }}
      >
        {value.code}
      </SyntaxHighlighter>
    </div>
  );
};

export default React.memo(CopyCode);