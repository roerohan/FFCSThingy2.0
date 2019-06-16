import React, { Component } from "react";

import { Container, Table } from 'react-bootstrap';

import "./TimeTable.css";
class TimeTable extends Component {

	state = {
		skip: []
	}
	
	renderHeader1 = () => {
		return(
			<tr>
				<td class="ColumnOneDays">THEORY<br/>HOURS
				</td>
				<td class="TheoryHours">08:00 AM
					<br/>to
					<br/>08:50 AM
				</td>
				<td class="TheoryHours">09:00 AM
					<br/>to
					<br/>09:50 AM
				</td>
				<td class="TheoryHours">10:00 AM
					<br/>to
					<br/>10:50 AM
				</td>
				<td class="TheoryHours">11:00 AM
					<br/>to
					<br/>11:50 AM
				</td>
				<td class="TheoryHours">12:00 PM
					<br/>to
					<br/>12:50 PM
				</td>
				<td class="TheoryHours"></td>
				<td widtd="8px" rowSpan={9} class="ColumnOneDays">
					<strong>B
					<br/>R
					<br/>E
					<br/>A
					<br/>K</strong>
				</td>
				<td class="TheoryHours">02:00 PM
					<br/>to
					<br/>02:50 PM
				</td>
				<td class="TheoryHours">03:00 PM
					<br/>to
					<br/>03:50 PM
				</td>
				<td class="TheoryHours">04:00 PM
					<br/>to
					<br/>04:50 PM
				</td>
				<td class="TheoryHours">05:00 PM
					<br/>to
					<br/>05:50 PM
				</td>
				<td class="TheoryHours">06:00 PM
					<br/>to
					<br/>06:50 PM
				</td>
				<td class="TheoryHours">07:00 PM
					<br/>to
					<br/>07:50 PM
				</td>
			</tr>
		)
	}

	renderHeader2 = () => {
		return (
			<tr>
				<td class="ColumnOneDays">LAB
					<br/>HOURS
				</td>
				<td class="LabHours">08:00 AM
					<br/>to
					<br/>08:45 AM
				</td>
				<td class="LabHours">08:45 AM
					<br/>to
					<br/>09:30 AM
				</td>
				<td class="LabHours">10:00 AM
					<br/>to
					<br/>10:45 AM
				</td>
				<td class="LabHours">10:45 AM
					<br/>to
					<br/>11:30 AM
				</td>
				<td class="LabHours">11:30 AM
					<br/>to
					<br/>12:15 AM
				</td>
				<td class="LabHours">12:15 AM
					<br/>to
					<br/>01:00 PM
				</td>
				<td class="LabHours">02:00 PM
					<br/>to
					<br/>02:45 PM
				</td>
				<td class="LabHours">02:45 PM
					<br/>to
					<br/>03:30 PM
				</td>
				<td class="LabHours">04:00 PM
					<br/>to
					<br/>04:45 PM
				</td>
				<td class="LabHours">04:45 PM
					<br/>to
					<br/>05:30 PM
				</td>
				<td class="LabHours">05:30 PM
					<br/>to
					<br/>06:15 PM
				</td>
				<td class="LabHours">06:15 PM
					<br/>to
					<br/>07:00 PM
				</td>
			</tr>
		)
	}

	renderRow = (row) => {
		console.log('Rendering: ' + row);
		var elems = row.map((c,i) => {
			if(i === 0) return this.renderDays(c);

			var slots = c.split('/');
			var slotString, reqdCourse;

			if (slots[0] === '') slotString = slots[1];
			else if (slots[1] === '') slotString = slots[0];
			else slotString = c;


			if (!this.props.filledSlots.includes(slots[0]) && !this.props.filledSlots.includes(slots[1]))
				return this.renderEmpty(c, slotString);
			else if (this.props.filledSlots.includes(slots[0])) {
				
				reqdCourse = this.props.timetable.find(e => (
					e.slot.split('+').includes(slots[0]) && 
					e.timetableName === this.props.activeTimetable
				));
				
				return this.renderFilledTheory(c, slotString, reqdCourse);
			}
			else if (this.props.filledSlots.includes(slots[1])) {
				reqdCourse = this.props.timetable.find(e => (
					e.slot.split('+').includes(slots[1]) &&
					e.timetableName === this.props.activeTimetable
				));

				return this.renderFilledLab(c, slotString, reqdCourse);		
			}
		})
		
		return(
			<tr>
				{elems}
			</tr>
		)
	}

	renderDays = (day) => {
		return <td key={day}>{day}</td>
	}

	renderEmpty = (c, slotString) => {
		var slots = c.split('/');
		
		return <td key={c}>{slotString}</td>
	}

	renderFilledTheory = (c, slotString, reqdCourse) => {
		var slots = c.split('/');
		
		return (
			<td key={c}>
				{slotString} <br />
				{reqdCourse.code} <br />
				{reqdCourse.venue} - {reqdCourse.course_type}
			</td>
		)
	}

	renderFilledLab = (c, slotString, reqdCourse) => {
		var slots = c.split('/');

		return (
			<td key={c}>
				{slotString} <br />
				{reqdCourse.code} <br />
				{reqdCourse.venue} - {reqdCourse.course_type}
			</td>
		)
	}

	renderBody = () => {
		var slots = [
			['MON', 'A1/L1', 'F1/L2', 'D1/L3', 'TB1/L4', 'TG1/L5', '/L6', 'A2/L31', 'F2/L32', 'D2/L33', 'TB2/L34', 'TG2/L35', 'V3/L36'],
			['TUE', 'B1/L7', 'G1/L8', 'E1/L9', 'TC1/L10', 'TAA1/L11', '/L12', 'B2/L37', 'G2/L38', 'E2/L39', 'TC2/L40', 'TAA2/L41', 'V4/L42'],
			['WED', 'C1/L13', 'A1/L14', 'F1/L15', 'V1/L16', 'V2/', 'EXTM/', 'C2/L43', 'A2/L44', 'F2/L45', 'TD2/L46', 'TBB2/L47', 'V5/L48'],
			['THU', 'D1/L19', 'B1/L20', 'G1/L21', 'TE1/L22', 'TCC1/L23', '/L24', 'D2/L49', 'B2/L50', 'G2/L51', 'TE2/L52', 'TCC2/L53', 'V6/L54'],
			['FRI', 'E1/L25', 'C1/L26', 'TA1/L27', 'TF1/L28', 'TD1/L29', '/L30', 'E2/L55', 'C2/L56', 'TA2/L57', 'TF2/L58', 'TDD2/L59', 'V7/L60']
		];

		var rows = slots.map(row => this.renderRow(row));

		return rows;
	}

	render() {
		return (
			<Container>
				<Table responsive>
					<tbody>
						{this.renderHeader1()}
						{this.renderHeader2()}
						{this.renderBody()}
					</tbody>
				</Table>
			</Container>
		);
	}
}
export default TimeTable;
