import PropTypes from 'prop-types';
import { Editor } from '@tinymce/tinymce-react';
import { Controller } from 'react-hook-form';
import appwriteConfig from '../../config/appwriteConfig';

export default function RTE({ name, control, label, defaultValue = '' }) {
  return (
    <div className="flex w-full flex-col gap-2">
      {label && <label className="mb-1 inline-block pl-1 font-semibold">{label}</label>}

      <Controller
        name={name || 'content'}
        control={control}
        render={({ field: { onChange } }) => (
          <Editor
            apiKey={appwriteConfig.TinymceApiKey}
            initialValue={defaultValue}
            init={{
              initialValue: defaultValue,
              height: 500,
              menubar: true,
              plugins: [
                'image',
                'advlist',
                'autolink',
                'lists',
                'link',
                'charmap',
                'preview',
                'anchor',
                'searchreplace',
                'visualblocks',
                'code',
                'fullscreen',
                'insertdatetime',
                'media',
                'table',
                'code',
                'help',
                'wordcount',
                'anchor',
              ],
              toolbar:
                'undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help',
              content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
              mobile: {
                menubar: true,
              },
            }}
            onEditorChange={onChange}
          />
        )}
      />
    </div>
  );
}

RTE.propTypes = {
  name: PropTypes.string,
  control: PropTypes.any,
  label: PropTypes.string,
  defaultValue: PropTypes.string,
};
