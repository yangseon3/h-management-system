import React, { useEffect, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { postDetailContentData } from 'pages/ErrorPresenter/ErrorController';
import './ErrorDetailSolution.scss';

const ErrorDetailSolution = ({
  errorInfo,
  content,
  manager,
  postDetailData,
}) => {
  const [disabled, setDisabled] = useState(true);
  const [isUpdated, setIsUpdated] = useState(false);
  const [contentInfo, setContentInfo] = useState({
    manager: '',
    content: '',
  });

  useEffect(() => {
    if (content === '' && manager === '') {
      setIsUpdated(false);
    } else {
      setIsUpdated(true);
    }

    setContentInfo({
      manager: manager,
      content: content,
    });

    return () => {
      setDisabled(true);
    };
  }, [manager, content]);

  const contentInfoHandler = e => {
    const { name, value } = e.target;
    setContentInfo({ ...contentInfo, [name]: value });
  };

  const handleClickDisabled = () => {
    setDisabled(false);
  };

  const postContentData = useMutation(postDetailContentData, {
    onSuccess: () => {
      postDetailData();
    },
  });

  const contentData = { ...contentInfo, ...errorInfo, is_updated: isUpdated };

  const handleClickPostContentData = () => {
    if (contentInfo.manager === '' && contentInfo.content === '') {
      return console.log('담당자, 내용 모두 다 적어주세요!');
    } else if (contentInfo.manager === '') {
      return console.log('담당자를 적어주세요!');
    } else if (contentInfo.content === '') {
      return console.log('내용 적어주세요!');
    }

    postContentData.mutate(contentData);
  };

  return (
    <div className="errorDetailSolution">
      <div className="solutionHeader">
        <div className="solutionInputBox">
          {disabled ? (
            <input
              className="solutionInput"
              name="manager"
              value={contentInfo.manager}
              type="text"
              placeholder="담당자"
              disabled
            />
          ) : (
            <input
              className="solutionInput"
              name="manager"
              onChange={contentInfoHandler}
              value={contentInfo.manager}
              type="text"
              placeholder="담당자"
            />
          )}
        </div>
        <div className="solutionButtonBox">
          <button className="solutionEditButton" onClick={handleClickDisabled}>
            수정
          </button>
          <button
            className="solutionSubmitButton"
            onClick={handleClickPostContentData}
          >
            제출
          </button>
        </div>
      </div>
      <div className="solutionContentsBox">
        {disabled ? (
          <textarea
            placeholder="문제점에 대한 의견 혹은 문제 해결에 대한 정보"
            className="solutionContents"
            value={contentInfo.content || ''}
            disabled
          />
        ) : (
          <textarea
            placeholder="문제점에 대한 의견 혹은 문제 해결에 대한 정보"
            className="solutionContents"
            onChange={contentInfoHandler}
            value={contentInfo.content || ''}
            name="content"
          />
        )}
      </div>
    </div>
  );
};

export default ErrorDetailSolution;
