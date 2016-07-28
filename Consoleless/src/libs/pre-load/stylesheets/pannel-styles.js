export let pannelStyles = `
.Consoleless-disabled{
  display:none; !important
}
.Consoleless-ui-bar {
  width: 600px;
  height: 40px;
  position: fixed;
  z-index:5813;
  background: rgb(53, 131, 56);
  box-shadow:0px 0px 20px rgba(53, 131, 56,0.8);
}
.Consoleless-ui-bar .Consoleless.bar {

  width: inherit;
  height: inherit;
  display: flex;
  flex-direction: row;

}
.Consoleless-ui-bar .Consoleless.bar > .move {
  flex: 1;
  order: 1;
  display: block;
  text-align: center;
  transition: all .2s;
background:rgb(53, 131, 56);

  cursor: pointer;
  border-right: 1px solid white;
}
.Consoleless-ui-bar .Consoleless.bar > .move:hover {
  -webkit-filter: brightness(120%);
}
.Consoleless-ui-bar .Consoleless.bar > .move > i {
  width:25px;
  height:25px;
  display:inline-block;
  background-repeat:no-repeat;
  margin-top:5px;
  -webkit-filter:invert();
  background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAMXAAADFwBSZ1fYAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAFjSURBVEiJ1ZWxTkIxFIa/X+AxnGAgcTCERd4AEyBEFwZ3N8DNxBdwM8rkGxgHX8PByRgTA6MJm4mJkzAcB0ssVbktyGCTk6Y995yv/Xvai5kRa0ATeACaSXEJgBbwDpjrW38KCQCWCoqVKAT4oEzpYiCjXwAzG2XlyJPdDoAaUAYOvflL4Am4zcyQcPD1YAf12NiNiJ2s3OYgkhqS7iQVl0kmqejiG3MOT442MOFTis4ycgEd55sA7bmDl7QHXAEFxy5J2gkWWg7Hkl6DuZLrC8C1pI6Z3QDsA1MWl+myNnX5Ga8JMLNxzum3y/raSd7MBpJywJnnuOD7JdsGjr3xKXAffFMDut74yMwGfmX0+driqtVlQP/Ht8ut4gWoLAmpuPhu8lP/L56VzFdY0iawBVQDV1USwKOZPS9MEiHTkMX3YPgXcp2v6I/+x/vl7Vs/Kj6hukJQFCAJ4kA94A3opcR9ADC1gAmdEmAvAAAAAElFTkSuQmCC)
}
.Consoleless-ui-bar .Consoleless.bar > .title {
  flex: 2;
  order: 2;
  border-right: 1px solid white;
}
.Consoleless-ui-bar .Consoleless.bar > .title > h2 {
  padding-left: 20px;
  color: white;
  line-height: 40px;
  margin: 0;
  font-family: 'Lucida Sans Unicode';
}
.Consoleless-ui-bar .Consoleless.bar > .move-ui {
  flex: 1;
  order: 3;
  display: block;
  text-align: center;
  border-right: 1px solid white;
background:rgb(53, 131, 56);
  transition: all .2s;
  cursor: pointer;
}
.Consoleless-ui-bar .Consoleless.bar > .move-ui:hover {
  -webkit-filter: brightness(120%);
}
.Consoleless-ui-bar .Consoleless.bar > .move-ui > i {
  width:25px;
  height:25px;
  display:inline-block;
  background-repeat:no-repeat;
    margin-top:5px;
    -webkit-filter:invert();
  background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAMXAAADFwBSZ1fYAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAFjSURBVEiJ1ZWxTkIxFIa/X+AxnGAgcTCERd4AEyBEFwZ3N8DNxBdwM8rkGxgHX8PByRgTA6MJm4mJkzAcB0ssVbktyGCTk6Y995yv/Xvai5kRa0ATeACaSXEJgBbwDpjrW38KCQCWCoqVKAT4oEzpYiCjXwAzG2XlyJPdDoAaUAYOvflL4Am4zcyQcPD1YAf12NiNiJ2s3OYgkhqS7iQVl0kmqejiG3MOT442MOFTis4ycgEd55sA7bmDl7QHXAEFxy5J2gkWWg7Hkl6DuZLrC8C1pI6Z3QDsA1MWl+myNnX5Ga8JMLNxzum3y/raSd7MBpJywJnnuOD7JdsGjr3xKXAffFMDut74yMwGfmX0+driqtVlQP/Ht8ut4gWoLAmpuPhu8lP/L56VzFdY0iawBVQDV1USwKOZPS9MEiHTkMX3YPgXcp2v6I/+x/vl7Vs/Kj6hukJQFCAJ4kA94A3opcR9ADC1gAmdEmAvAAAAAElFTkSuQmCC)
}
.Consoleless-ui-bar .Consoleless.bar > .settings-config {
  flex: 1;
  order: 4;
  display: block;
  text-align: center;
  border-right: 1px solid white;
background:rgb(53, 131, 56);
  transition: all .2s;
  cursor: pointer;
}
.Consoleless-ui-bar .Consoleless.bar > .settings-config:hover {
  -webkit-filter: brightness(120%);
}
.Consoleless-ui-bar .Consoleless.bar > .settings-config > i:nth-child(1) {
  margin-right: 10px;
  width:25px;
  height:25px;
  display:inline-block;
  background-repeat:no-repeat;
  margin-top:5px;
  -webkit-filter:invert();
  background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOawAADmsBVP4NBgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAHkSURBVEiJrdaxa1RBEMfxz4p3KIgcmqhIFCySEAtFlFQBi1RCCkWwsPcfEEs7EYONhZ2gooWVRSwUG3vtAtrENIIoaERjEhExuhbvnW7u9t09yQ0MBzO/me/bt7vzLsQY1bEQwmMcT0ILMcaTtWrrQEIIO/E1k9oRY/zWr35LpuFwCOFmCGE8CY936kobTepGQwh3QggHu1Qxxr+OI3iHiBWcxTZcL2OdfhXbcR6rZWwR+zb0TQCH8D7TaLkC0Pa1TOwVducgj/o0+1+/nYNM4eeAAN9xrAtSgi4NCHIh7bvhCIcQduEDtuq2JczhNcZwGsMZ3Q/sjTH+O/IlpIkJ3Kh4sqcY6lj1UBnP6a+keniO9R5Lf4tWCkiKW2W+qvYznqjxfmdzgAQ0269H143P2OIm891jJWMHNpkHb/Re7ks0K15Vs8z3ql9qi/coLuO9CuEtNDoAjTKe0z/EGcWJbXQ+2X7Vt34eFzFT/s5X6NYxkh2QJWQav/osv46fq5rCI4rbPoixsoKxHOTugABtn8tBDuPjgACrmKzak6OKURDxG9cUn9j7Fc0eKD52l5O9XMN05caXoBN4gZkkNlkBmUo0p/AME5096/5baeFLJjUcY/zUr77OWBFjXFZM29QW6gDgD0L4Xu6EOeKFAAAAAElFTkSuQmCC);
}
.Consoleless-ui-bar .Consoleless.bar > .settings-config > i:nth-child(2) {
  margin-left: 10px;
  width:25px;
  height:25px;
  display:inline-block;
  background-repeat:no-repeat;
  margin-top:5px;
  -webkit-filter:invert();
  background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOawAADmsBVP4NBgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEaSURBVEiJtdS7LgRRHAfgr3ArvIBOPAIRFg0RQZRa77HuXoe4lcp9BlqdUoNCSCRHMyOzs7OzZy6KXzMn5/dl/mfOCCFoGszjEldYHFhvAdjEJ0KSL+y0hmArB2Sh3cYIpvFaAKT5xl5tBAsYwyo+RkDrdYDtZBzXkVCvLpAW3GAcKyXQU13gMQECbhOog/cC5KAu0MFLpugugZZzUDfq4COANPcJtIS3FBiJVACy0ARmoi5jDSDN/kBXy0C3sK9F4HDoVP4b6EMaAEcjv9AC4AcbkcBx5D3rA54jiisBKZICD5jCRQRwUvGf97dxLvOwDKoE5JE1zGKyBDqtCuSRNMuZxV5ToBTJvclZXWAYks95EyAGaQyEEPwCEwKzkCPTYMkAAAAASUVORK5CYII=);
}
.Consoleless-ui-bar .Consoleless.bar > .settings-config > i {

}
.Consoleless-ui-bar .Consoleless.bar > .enable {
  flex: 1;
  order: 4;

  display: block;
  text-align: center;
}
.Consoleless-ui-bar .Consoleless.bar > .enable > h4 {
  cursor: pointer;
  line-height: 40px;
  font-size: 20px;
  color: white;
  font-family: 'Lucida Sans Unicode';
  margin: 0;
}

`
