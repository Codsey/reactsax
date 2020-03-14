import React from 'react';
import classnames from 'classnames';
import './RsSelect.styles.scss';
import { generateID } from '../../../util/index';
import RsIconArrow from '../../../icons/arrow';
import { CSSTransition } from 'react-transition-group';

class RsSelect extends React.Component<any, any> {
  selectRef: any;
  optionsRef: any;
  id: any;
  constructor(props: any) {
    super(props);

    // const targetSelectInput = React.useRef(false);
    // const targetSelect = React.useRef(false);
    // const [activeOptions, setActiveOptions] = React.useState(false);

    this.optionsRef = React.createRef();
    this.selectRef = React.createRef();

    this.state = {
      activeOptions: false,
      active: false,
      id: generateID(),
      targetSelect: false,
      targetSelectInput: false
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    const options = this.optionsRef.current;
    if (!options && !this.state.activeOptions) {
      return;
    }
    const cords = this.selectRef.current.getBoundingClientRect();
    const width = cords.width;
    this.optionsRef.current.style.width = `${width}px`;
    this.optionsRef.current.style.top = '34px';
  };

  handleInputMouseDown = (e: any) => {
    this.setState({ active: !this.state.active }, this.handleResize);
    if (this.state.active) {
      e.target.blur();
      e.currentTarget.blur();
    }
  };

  handleBlur = (e: any) => {
    if (!this.state.active) {
      e.target.blur();
    }
  };

  beforeEnter(el: any) {
    el.style.height = 0;
  }

  enter(el: any) {
    console.log(el);
    let h = el.scrollHeight;
    el.style.height = h - 1 + 'px';
  }

  leave(el: any) {
    console.log(el);
    console.log('1');
    // el.style.minHeight = '0px';
    // el.style.height = '0px';
  }

  render() {
    const {
      state,
      disabled,
      loading,
      multiple,
      filter,
      children,
      label,
      labelPlaceholder,
      value,
      placeholder,
      textFilter,
      isColorDark,
      notData,
      message,
      messageType
    } = this.props;

    const { activeOptions, active, id } = this.state;

    const selectContentClasses = classnames(
      'rs-select',
      [`rs-select--state-${state}`],
      { 'rs-select--disabled': disabled },
      { activeOptions: activeOptions },
      { loading: loading }
    );

    const inputClasses = classnames(
      'rs-select__input',
      { multiple: multiple },
      { simple: !multiple && !filter }
    );

    const labelClasses = classnames(
      'rs-select__label',
      { 'rs-select__label--placeholder': labelPlaceholder },
      { 'rs-select__label--label': label },
      { 'rs-select__label--hidden': value }
    );

    const placeholderClasses = classnames('rs-select__label', {
      'rs-select__label--hidden': value || textFilter
    });

    const optionsClasses = classnames('rs-select__options', {
      isColorDark: isColorDark
    });

    const messageClasses = classnames('rs-select__message', [
      `rs-select__message--${messageType}`
    ]);
    return (
      <div className='rs-select-content'>
        <div
          className={selectContentClasses}
          ref={this.selectRef}
          onMouseLeave={(e: any) => {
            this.setState({ targetSelect: false, targetSelectInput: false });
          }}
          onMouseEnter={(e: any) => {
            this.setState({ targetSelectInput: true });
          }}
        >
          <input
            id={id}
            className={inputClasses}
            readOnly={true}
            onMouseDown={this.handleInputMouseDown}
            onMouseLeave={this.handleBlur}
            onBlur={() => this.setState({ active: false })}
          />

          {!multiple || label ? (
            <label htmlFor={id} className={labelClasses}>
              {labelPlaceholder || label}
            </label>
          ) : null}

          {!multiple && !labelPlaceholder ? (
            <label htmlFor={id} className={placeholderClasses}>
              {placeholder}
            </label>
          ) : null}

          {multiple ? (
            <button className='rs-select__chips'>
              {/**  SPREAD CHIPS HERE **/}
              {filter ? (
                <input
                  className='rs-select__chips__input'
                  placeholder={placeholder}
                  id={id}
                  value={textFilter}
                />
              ) : null}
            </button>
          ) : null}

          {/** TODO: FIX WRAPPER DIV BELOW! */}
          <CSSTransition
            component={null}
            in={active}
            timeout={170}
            unmountOnExit
            classNames={{
              enter: 'rs-select-enter',
              enterActive: 'rs-select-enter-active',
              exitActive: 'rs-select-leave-to',
              exit: 'rs-select-leave-active'
            }}
            onEntering={() => this.setState({ activeOptions: true })}
            onExited={() => this.setState({ activeOptions: false })}
          >
            <div className={optionsClasses} ref={this.optionsRef}>
              {activeOptions ? (
                <div className='rs-select__options__content'>
                  {notData ? (
                    <div className='rs-select__options__content__not-data'>
                      {notData || 'No data available'}{' '}
                    </div>
                  ) : null}
                  {children}
                </div>
              ) : (
                <React.Fragment />
              )}
            </div>
          </CSSTransition>

          {loading ? <div className='rs-select__loading'> </div> : null}

          <RsIconArrow />
        </div>
        {message ? <div className={messageClasses}>{message} </div> : null}
      </div>
    );
  }
}

export default RsSelect;
