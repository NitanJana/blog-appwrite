import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import storageService from '../../appwrite/storageService';
import dbService from '../../appwrite/dbService';
import { useCallback, useEffect } from 'react';
import { Input, PrimaryBtn, RTE, Select } from '../';

const PostForm = ({ post }) => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const { register, handleSubmit, watch, setValue, getValues, control } = useForm({
    defaultValues: {
      title: post?.title || '',
      content: post?.content || '',
      status: post?.status || 'active',
      featuredImage: post?.featuredImage || '',
      slug: post?.$id || '',
      // category: post?.category,
      // author: post?.author,
      // authorId: post?.authorId,
    },
  });

  const submit = async (data) => {
    if (post) {
      const file = data.image[0] ? storageService.uploadFile(data.image[0]) : null;
      if (file) {
        storageService.deleteFile(post?.featuredImage);
      }

      const dbPost = await dbService.updatePost(post.$id, {
        ...data,
        featuredImage: file?.$id || undefined,
      });

      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }
    } else {
      const file = await storageService.uploadFile(data.image[0]);

      if (file) {
        const fileId = file.$id;
        data.featuredImage = fileId;
        const dbPost = await dbService.createPost({ ...data, userId: user.$id });

        if (dbPost) {
          navigate(`/post/${dbPost.$id}`);
        }
      }
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === 'string')
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, '-')
        .replace(/\s/g, '-');

    return '';
  }, []);

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === 'title') {
        setValue('slug', slugTransform(value.title), { shouldValidate: true });
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, setValue, slugTransform]);

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap py-4">
      <div className="w-2/3 px-2">
        <Input label="Title :" placeholder="Title" className="mb-4" {...register('title', { required: true })} />
        <Input
          label="Slug :"
          placeholder="Slug"
          className="mb-4"
          {...register('slug', { required: true })}
          onInput={(e) => {
            setValue('slug', slugTransform(e.currentTarget.value), { shouldValidate: true });
          }}
        />
        <RTE label="Content :" name="content" control={control} defaultValue={getValues('content')} />
      </div>
      <div className="w-1/3 px-2">
        <Input
          label="Featured Image :"
          type="file"
          className="mb-4"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register('image', { required: !post })}
        />
        {post && (
          <div className="mb-4 w-full">
            <img src={storageService.getFilePreview(post.featuredImage)} alt={post.title} className="rounded-lg" />
          </div>
        )}
        <Select
          options={['active', 'inactive']}
          label="Status"
          className="mb-4"
          {...register('status', { required: true })}
        />

        <PrimaryBtn type="submit" className="w-full">
          {post ? 'Update' : 'Submit'}
        </PrimaryBtn>
      </div>
    </form>
  );
};

PostForm.propTypes = {
  post: PropTypes.shape({
    $id: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    status: PropTypes.string,
    featuredImage: PropTypes.string,
  }),
};

export default PostForm;
